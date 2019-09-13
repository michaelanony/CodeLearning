import csv
import numpy as np
import matplotlib.pyplot as plt

# with open('data.csv') as c:
#     r = csv.reader(c)
#     data = []
#     nu = []
#     for row in r:
#         data.append(row[1])
#         nu.append(row[4])
data = []
nu = []
for i in range(1,10):
    data.append(i)
print(data)

for x in range(101,110):
    nu.append(x)
plt.title("Demo")
plt.xlabel("data")
plt.ylabel("nu")
plt.plot(data,nu)
plt.show()






