#pip install -U finance-datareader

import FinanceDataReader as fdr
fdr.__version__

import matplotlib.pyplot as plt

df_krx = fdr.StockListing('KRX')
df_krx.head()


df = fdr.DataReader('005930', '2019','2023')
df['Close'].plot()

