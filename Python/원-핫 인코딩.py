#Colab

import pandas as pd 
#파일경로를 찾고 변수 file_path에 저장
file_path= './exam_sample.csv'

#read csv()함수로 데이터프레임 변환 
df = pd.read_csv(file_path, engine='python', encoding='cp949')

df = pd.get_dummies(df)
df