from turtle import *

width(5)

speed(200)

forward(300)
left(90)
forward(200)
left(90)
forward(300)
left(90)
forward(200)


left(90)
forward(130)
color('yellow')
begin_fill()
left(90)
forward(90)
right(90)
forward(50)
right(90)
forward(90)

end_fill()
  
penup()
goto(300, 200)
pendown()

color('red')
begin_fill()
right(150)
forward(200)
left(101)
forward(270)

end_fill()

color('black')

penup()
goto(200, 150)
pendown()

left(49)
forward(60)
left(90)
forward(60)
left(90)
forward(60)
left(90)
forward(60)
left(180)
forward(30)
right(90)
forward(60)

penup()
goto(260, 120)
pendown()
right(90)
forward(60)

penup()
goto(40, 150)
pendown()

left(90)
forward(60)
left(90)
forward(60)
left(90)
forward(60)
left(90)
forward(60)

penup()
goto(40, 120)
pendown()

right(180)
forward(60)

penup()
goto(70, 150)
pendown()

right(90)
forward(60)

penup()
goto(1000, 1000)
pendown()

exitonclick()