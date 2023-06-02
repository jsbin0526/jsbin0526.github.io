import matplotlib.animation as animation
import matplotlib.pyplot as plt
import numpy as np
from scipy.optimize import newton
from sympy import Symbol, atan, tan, cos, integrate

fig = plt.figure()
plt.subplot(polar=True)

a = 10
b = 8
e = (1 - (b / a) ** 2) ** (1 / 2)
T = 10

time_l = [1.00, 4.99, 5.0, 9.99]

radius_l = []
theta_l = []

_theta = np.linspace(0, 2 * np.pi, 1001)
_r = a * (1 - e ** 2) / (1 + e * np.cos(_theta))

plt.plot(_theta, _r)

vehicle, = plt.plot([], [], 'ro')


def animate(i):
    t = i / 100
    print(t)
    M = 2 * np.pi * t / T
    E = newton(lambda E: E - e * np.sin(E) - M, M)

    theta = 2 * np.arctan(np.sqrt((1 + e) / (1 - e)) * np.tan(E / 2))
    r = a * (1 - e * np.cos(E))

    if time_l[0] <= t <= time_l[1] or time_l[2] <= t <= time_l[3]:
        radius_l.append(r)
        if t in time_l:
            theta_l.append(theta)

    vehicle.set_data(theta, r)
    return vehicle,


anim = animation.FuncAnimation(fig, animate,
                               frames=10000, interval=1)
plt.show()
theta = Symbol('theta')
r = a*(1 - e**2)/(1-e*cos(theta))
f = 1/2*r**2
theta_l = list(map(lambda x: x + 2 * np.pi if x < 0 else x, theta_l))
print(theta_l)
print(integrate(f, (theta, theta_l[0], theta_l[1])).evalf())
print(integrate(f, (theta, theta_l[2], theta_l[3])).evalf())
