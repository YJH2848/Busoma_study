import numpy as np
import matplotlib.pyplot as plt
seven = np.array([[0,1,1,1,0],
                  [0,1,0,1,0],
                  [0,0,0,1,0],
                  [0,0,0,1,0],
                  [0,0,0,1,0]])
A = np.array([[0,0,0],[1,1,1],[0,0,0]])
S = []
for i in range(3):
  for j in range(3):
      b = seven[  i:i+3  , j : j+3 ]
      S.append((b @ A).sum())
S = np.array(S).reshape(3,3)


imgData2 = np.zeros((3,3,3) )
for i in range (len(S)) :
  for j in range(len(S[i])) :
    if S[i][j] :
      imgData2[i][j] = [S[i][j]*0.1, 0, 0] 
    else : 
      imgData2[i][j] = [1,1,1]
fig = plt.figure()
plt.imshow(imgData2)
plt.show()