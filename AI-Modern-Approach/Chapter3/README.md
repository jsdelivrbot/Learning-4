# Chapter 3 - Solving Problems By Searching

## 3.1 
```
Explain why problem formulation must follow goal formulation
```
Problem formulation is the process of deciding what actions and states to consider, given a goal.
If the agent doesn't know what kind of actions it should take to achieve a goal, it can never achieve that goal.

## 3.2
```
Your goal is to navigate a robot out of a maze. The robot starts in the center of the maze facing north. You can turn the robot to face north, east, south, or west. You can direct the robot to move forward a certain distance, although it will stop before hitting a wall.
```
* a. Formulate this problem. How large is the state space?

The state space is the set of all states reachable from the initial state by any sequence of actions.
We formulate the problem by stating that the agent will consider actions at the level of 1m movements. Each state therefore corresponds to being in a 1m square.
Therefore the state space is the square metre of the area times 4 for orientation (for example 10m2 has a space state of 10*4 = 40)

* b. In navigating a maze, the only place we need to turn is at the intersection of two or more corridors. Reformulate this problem using this observation. How large is the state space now?

Formulation: Agent will consider actions at the level of intersections. Each state corresponds to being in an intersection times the direction you are facing.
State space: 2 < n*4 < n*4+1

* c. From each point in the maze, we can move in any of the four directions until we reach a turning point, and this is the only action we need to do. Reformulate the problem using these actions. Do we need to keep track of the robot's orientation now?

Formulation: Again the agent will consider actions at the level of intersections (or turning points). We don't need to consider the orientation, because by definition, we need to turn and those turns are connected to other turning points, like nodes in a binary tree.

* d. In our initial description of the problem we already abstracted from the real world, restricting actions and removing details. List three such simplifications we made.

1. We can only turn in four directions

2. The space is apparently perfectly flat

3. We need no resources to move (time,food,gas,etc)

## 3.3
```
Suppose two friends live in different cities on a map, such as the Romania map shown in Figure 3.2. On every turn, we can simultaneously move each friend to a neighboring city on the map. The amount of time needed to move from city i to neighbor j is equal to the road distance d(i,j) between the cities, but on each turn the friend that arrives first must wait until the other one arrives (and calls the first on his/her cell phone) before the next turn can begin. We want the two friends to meet as quickly as possible.
```
* a. Write a detailed formulation for this search problem. (You will find it helpful to define some formal notation here.)

