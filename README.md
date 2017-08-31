# Ping-Pong #
### A Code-Review Exercise for Epicodus | 06.09.17 ###

by Max Scher

## Description ##
This web application takes a number from a user, returning a range of numbers from 1 to the chosen number, except:
* Numbers divisible by 3 are replaced with "ping"
* Numbers divisible by 5 are replaced with "pong"
* Numbers divisible by 15 are replaced with "ping-pong"
A user can enter a new number and see new results over and over again.

## Setup ##
* Copy url from main repository page.
* In terminal, on Desktop:
  * $ git clone https://github.com/maxobaxo/ping-pong
  * $ cd ping-pong
  * $ open index.html

## Specifications ##
* It can return the provided value.
  * **Example Input:** 2
  * **Example Output:** 2
* It can return an alert if the value provided is not a number.
  * **Example Input:** hello
  * **Example Output:** Please enter a number!
* It can count up to the provided number.
  * **Example Input:** 2
  * **Example Output:** [1, 2]
* It will remove the old results upon a new submission.
  * **ExamplePage:** [1, 2]
  * **Example Input:** 5
  * **Example Output:** [1, 2, 3, 4, 5]
* It can replace values divisible by 3 with "ping".
  * **Example Input:** 3
  * **Example Output:** [1, 2, "ping"]
* It can replace numbers divisible by 5 with "pong".
  * **Example Input:** 2
  * **Example Output:** [1, 2]
* It can replace numbers divisible by 7 with "pingpong".
  * **Example Input:** 2
  * **Example Output:** [1, 2]


## Languages Used ##
Git,
HTML,
CSS,
Bootstrap,
Javascript,
jQuery

## License Information ##
Copyright (c) 2017 Max Scher

This webpage is licensed under the MIT license.
