import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

from sklearn import datasets
iris = datasets.load_iris()

print(iris['target'].shape)
print(iris['target'])

df = pd.DataFrame(iris['data'], columns=iris['feature_names'])
df.columns = ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']
df['Target'] = iris['target']

df.duplicated().sum()
df.loc[df.duplicated(), :]
df = df.drop_duplicates()
df.corr()

x_data = df.loc[:, 'sepal_length':'petal_width']
y_data = df.loc[:, 'Target']


x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size=0.2, shuffle=True, random_state=20)
knn = KNeighborsClassifier(n_neighbors=7)
knn.fit(x_train, y_train)

y_knn_pred = knn.predict(x_test)
knn_acc = accuracy_score(y_test, y_knn_pred)

print("accuracy: ", knn_acc)