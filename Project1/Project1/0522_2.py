import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

from sklearn import datasets
iris = datasets.load_iris()

# print("데이터셋 크기 ", iris['target'].shape)
# print("데이터셋 내용", iris['target'])

print("데이터셋 크기 ", iris['data'].shape)
print("데이터셋 내용", iris['data'][:7,:])




df=pd.DataFrame(iris['data'], columns=iris['feature_names'])
df.columns=['sepal_length','sepal_width','petal_lengh','petal_width']
print(df.head(2))

print(df.describe())

df.isnull().sum()
df.duplicated().sum()
df.loc[df.duplicated(),:]

df = df.drop_duplicates()
df.corr() #상관관계
sns.heatmap(data=df.corr(), square=True, annot=True, cbar =True)
plt.show()