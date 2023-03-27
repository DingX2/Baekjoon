import matplotlib.pyplot as plt
import pandas as pd
import folium
import json

url = 'https://www.seoul.go.kr/coronaV/coronaStatus.do'
table = pd.read_html(url)

print(table)

df_raw = table[0].T.reset_index()
df_1 = df_raw[['index', 0]]
df_1.columns = ['시군구명', '확진자수']
df_2 = df_raw[[2, 3]]
df_2.columns = ['시군구명', '확진자수']
df_corona = pd.concat([df_1, df_2], axis=0, ignore_index=True)
df_corona = df_corona.drop(df_corona.index[25])

path = "c:/windows/Fonts/malgun.ttf"
from matplotlib import font_manager, rc
font_name = font_manager.FontProperties(fname=path).get_name()
rc('font', family=font_name)

df_corona_seoul = pd.DataFrame(df_corona.groupby('시군구명')['확진자수'].sum())
df_corona_seoul['확진자수'] = pd.to_numeric(df_corona_seoul['확진자수'])
df_corona_seoul.sort_values(by='확진자수').plot.barh(color='palevioletred', figsize=(12, 8))

plt.title('서울시 구별 코로나 확진자수 총계')
plt.show()

geo_path = "C:\\Users\\Pourd\\Downloads\\seoul_municipalities_geo_simple.json"
geo_json = json.load(open(geo_path, encoding='utf-8'))

center = [37.541, 126.986]
map = folium.Map(location = [center[0], center[1]], zoom_start = 11)

map.choropleth(geo_data = geo_json,
               data = df_corona_seoul['확진자수'],
               fill_color = 'BuPu',
               key_on = 'feature.properties.name',
               fill_opacity = 0.7,
               line_opacity = 0.2,
               highlight=True)

map.show_in_browser()




#map.show_in_browser()
#map.show()
