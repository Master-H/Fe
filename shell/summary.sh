#!/usr/bin/env bash

# 字符串变量
name1=huangxingyuan   #  字符串可以不加单双引号
name2="huangxingyuan" #  字符串可以加双引号
name3='huangxingyuan' #  字符串可以加单引号

echo ${name1}
echo $name2 # 变量可不带括号

arr=(1,info,2) # 定义数组
length=${#name[n]} # 获取name长度
echo ${length} # 8
echo ${name} # 输出变量name


# ***if 语句部分*** #

a=1 # 字符串变量
b=2
c=test

if [ $a == $b ]
    then
        echo "a等于B"
elif [ $b -gt $a ] # 必须有空格
    then
        echo "11"
fi # 必须有fi


# ***for循环** #

# 1
arr=('A' 'B' 'C') # 注意不能按照js用,隔开，比如('A','B')

for index in ${arr[@]};
do
    echo $index
done

# 2
for ((i=0; i<5; i++)); do
    echo "i="$i
done

# *** while *** #

num=5

while(($num >=0)) # 注意双括号，不是单括号
do
    echo $num
    let "num--"
done

