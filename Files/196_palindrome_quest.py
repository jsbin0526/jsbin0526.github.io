import time
def add(list1,list2) :
    num1 = int("".join(list1))
    num2 = int("".join(list2))
    return num1+num2
def reverse(num) :
    r_num = []
    for i in range(len(num)) :
        r_num.append(num[-(i+1)])
    return r_num
def check_digit(list1,list2) :
    added_len = len(str(add(list1,list2)))
    len1 = len("".join(list1))
    len2 = len("".join(list2))
    return added_len + len1 + len2
def main() :
    num = list(input("input number: "))
    trigger = True
    if "".join(num) == "".join(num)[::-1] :
        print(int("".join(num)))
        print(len("".join(num)))
        trigger = False
    digit = 0
    while trigger :
        r_num = reverse(num)
        digit += check_digit(num,  r_num) 
        num = add(num , r_num)
        if str(num) == str(num)[::-1] :
            print("SUCCES")
            print("number:", num)
            print("total digit:", digit)
            break
        else :
            print("number:", num)
            time.sleep(1)
            num = list(str(num))
if __name__ == '__main__' :
    main()
