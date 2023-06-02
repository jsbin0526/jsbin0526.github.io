from datetime import datetime
from datetime import timedelta
import random
import pygame
from pygame.locals import *
white = (255,255,255)
green = (0,255,0)
red = (255,0,0)
black = (0,0,0)
class Snake :
    color = green
    def crawl(self) :
        head_position = self.positions[0]
        x , y = head_position
        if self.direction == 'up' :
            self.positions = [[x , y-1]] + self.positions[:-1]
        elif self.direction == 'down' :
            self.positions = [[x , y+1]] + self.positions[:-1]
        elif self.direction == 'left' :
            self.positions = [[x-1 , y]] + self.positions[:-1]
        elif self.direction == 'right' :
            self.positions = [[x+1 , y]] + self.positions[:-1]
    def turn(self , direction) :
        self.direction = direction
    def grow(self) :
        tail_position = self.positions[-1]
        before_tail_position = self.positions[-2]
        x , y = tail_position
        if tail_position[1] == before_tail_position[1] - 1 and tail_position[0] == before_tail_position[0] :
            self.positions.append([x , y - 1])
        elif tail_position[1] == before_tail_position[1] + 1 and tail_position[0] == before_tail_position[0] :
            self.positions.append([x , y + 1])
        elif tail_position[0] == before_tail_position[0] - 1 and tail_position[1] == before_tail_position[1] :
            self.positions.append([x - 1 , y])
        elif tail_position[0] == before_tail_position[0] + 1 and tail_position[1] == before_tail_position[1] :
            self.positions.append([x + 1 , y])
    def draw(self , screen) :
        for position in self.positions :
            draw_block(screen , self.color , position)
    def __init__(self) :
        self.positions = [[6 , 9] , [7 , 9] , [8 , 9] , [9 , 9]]
        self.direction = "up"
class Apple :
    color = red
    def draw(self , screen) :
        draw_block(screen , self.color , self.position)
    def __init__(self , position = [5,5]) :
        self.position = position

class GameBoard :
    width = 100
    height = 100
    def put_new_apple(self) :
        self.apple = Apple([random.randint(0 , 79) , random.randint(0 , 44)])
        for position in self.snake.positions :
            if self.apple.position == position :
                self.put_new_apple()
                break
    def draw(self , screen) :
        self.apple.draw(screen)
        self.snake.draw(screen)
        self.text = self.font.render(str(self.score) , True , black)
        screen.blit(self.text , self.text.get_rect())
    def process_turn(self) :
        self.snake.crawl()
        if self.snake.positions[0] in self.snake.positions[1:] or self.snake.positions[0][0] < 0 or self.snake.positions[0][0] > 79 or self.snake.positions[0][1] < 0 or self.snake.positions[0][1] > 44 :
            print("GAMEOVER")
            raise GameOverException()
        if self.snake.positions[0] == self.apple.position :
            self.score += self.score_increase
            self.score_increase += 1
            if self.per > 0.05 :
                self.per -= 0.005
                print(self.per)
            self.snake.grow()
            self.put_new_apple()
    def __init__(self) :
        self.snake = Snake()
        self.apple = Apple()
        self.per = 0.3
        self.score = 0
        self.score_increase = 1
        self.text = 0
        self.font = pygame.font.SysFont('malgun.ttf',40)

class GameOverException(Exception) :
    pass

def draw_background(screen) :
    background = pygame.Rect((0 , 0) , (1600 , 900))
    pygame.draw.rect(screen , white , background)

def draw_block(screen , color , position) :
    block =pygame.Rect((position[0]*20 , position[1]*20 , 20 , 20)) 
    pygame.draw.rect(screen , color , block)

def main() :
    pygame.init()
    pygame.font.init()
    pygame.display.set_caption("snake game")
    screen = pygame.display.set_mode((1600 , 900))
    game_board = GameBoard()
    direction_on_key = {
    pygame.K_UP : 'up' ,
    pygame.K_DOWN : 'down' ,
    pygame.K_LEFT : 'left' ,
    pygame.K_RIGHT : 'right' 
    }
    turn_interval =  timedelta(seconds = 0.3)
    last_turn_time = datetime.now()
    running = True
    pause = True
    old_event_key = 273
    while running :
        for event in pygame.event.get() :
            if event.type == pygame.QUIT :
                running = False
            if event.type == pygame.KEYDOWN :
                if event.key in direction_on_key and abs(549 - (event.key + old_event_key)) != 2 :
                    old_event_key = event.key
                    game_board.snake.turn(direction_on_key[event.key])
                if event.key == pygame.K_SPACE :
                    if pause == False :
                        pause = True
                    elif pause == True :
                        pause = False
        if turn_interval < datetime.now() - last_turn_time and pause == False :
            try :
                game_board.process_turn()
            except GameOverException :
                running = False
            last_turn_time = datetime.now()
        draw_background(screen)
        turn_interval = timedelta(seconds = game_board.per)
        game_board.draw(screen)
        pygame.display.update()
    pygame.quit()

if __name__ == "__main__" :
    main()
