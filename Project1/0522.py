from sklearn import tree

input_data = [[300,0],[250,0],[270,0],[220,1],[240,1],[200,1]]
labels =[0,0,0,1,1,1]

# 0이 사과 1이 오렌지

clf = tree.DecisionTreeClassifier()
clf = clf.fit(input_data,labels)

print('orange' if clf.predict([[340,1]]) else 'apple')
