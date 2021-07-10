#!/usr/bin/env bash

num=5

while(($num >=0)) # 注意双括号，不是单括号
do
    echo $num
    let "num--"
done