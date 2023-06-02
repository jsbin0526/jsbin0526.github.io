# -*- coding: UTF-8 -*-
from random import * #랜덤 모듈 사용
import os #os 모듈 사용
i=0 #난수 지정 whlie 유동변수
j=0 #플레이어 입력 기회 while 유동변수
n=0 #볼 확인 유동변수
b=0 #볼 유동변수
s=0 #스트라이크 유동변수
wh_num = [0,0,0,0] #처음 난수 지정
sc_num = 0 #플레이어 입력 숫자 지정
while(i < 5) : #난수 지정 whlie
    wh_num[i-1] = randrange(10) #난수 생성
    if (i == 0 or wh_num[i-2] != wh_num[i-1] and wh_num[i-3] != wh_num[i-1] and wh_num[i-4] != wh_num[i-1]) : #난수가 중복되지 않을 시
        i += 1 #유동변수 +1
    elif (wh_num[i-2] == wh_num[i-1] or wh_num[i-3] == wh_num[i-1] or wh_num[i-4] == wh_num[i-1]) : #난수가 중복될 시
        i -= 1 #유동변수 -1
        continue #이 elif 넘기기
print("이 게임은 야구게임(스트라이크-볼게임)입니다.\n 0부터 9까지의 숫자중 중복되지 않는 숫자 무작위 네자리 숫자를 맞춰주십시오\n입력하신 숫자에서 숫자만 맞다면 볼, 숫자와 위치가 모두 맞으면 스트라이크입니다.\n10번의 기회안에 지정된 숫자를 맞춰주십시오.")
w0 = wh_num[0] #분리해서 대조 1
w1 = wh_num[1] #분리해서 대조 2
w2 = wh_num[2] #분리해서 대조 3
w3 = wh_num[3] #분리해서 대조 4
while (j < 10) : #플레이어 입력 기회 whlie
    print(str(j+1)+"번째 숫자를 입력해 주십시오.")
    sc_num = input() #플레이어가 정수값 입력
    if(len(str(sc_num)) == 4 and sc_num.isdigit()) : #자릿수,자료형 확인
        n = 0 #초기화
        b = 0 #초기화
        s = 0 #초기화
        j += 1 #유동변수 +1
        s0 = sc_num[0] #분리해서 대조 5
        s1 = sc_num[1] #분리해서 대조 6
        s2 = sc_num[2] #분리해서 대조 7
        s3 = sc_num[3] #분리해서 대조 8
        print(s0 + s1 + s2 + s3+"(을)를 입력하셨습니다") #자신이 입력한 값 확인
        if (str(s0) == str(w0) and str(s1) == str(w1) and str(s2) == str(w2) and str(s3) == str(w3)) : #모든 숫자가 일치한다면
            print("모든 숫자가 일치합니다!\nTHANK YOU FOR PLAYING")
            input("press <Enter key>to exit:")
            break #if문 빠져나옴
        while (n < 4) : #네번 반복
            if (str(sc_num[n]) == str(wh_num[n])) : #자릿수가 일치하며 숫자도 일치할 때
                s += 1 #스트라이크 + 1
                b -= 1 #볼 - 1
            if (str(sc_num[n]) in str(wh_num)) : #숫자만 일치할 때
                b += 1 #볼 + 1
            n += 1 #스트라이크-볼 판별 while 유동변수 + 1
        print("볼: " + str(b)) #볼 표시
        print("스트라이크: " + str(s)) #스트라이크 표시
        if (j == 10) : #기회를 모두 소모하면
            print("주어진 기회를 모두 소모하였습니다!\nGAMEOVER!\n처음숫자는 " + str(w0) + str(w1) + str(w2) + str(w3) + " 였습니다")
            input("press <Enter key>to exit:")
            break#while 문 빠져나옴
    else : #자릿수나 자료형이 올바르지 않을 때
        print("올바른 숫자가 아닙니다.")
