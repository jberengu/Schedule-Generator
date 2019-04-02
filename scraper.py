from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
import pandas as pd

chromedriver = '/usr/local/bin/chromedriver'
chrome_options = Options()
chrome_options.add_argument("--headless")

driver = webdriver.Chrome(chromedriver, chrome_options=chrome_options)
driver.get("https://banner.umw.edu/prod/umw_clas.p_displayallnocount")

print("Connecting to Banner...")

assert "Select Term College" in driver.title
elem = driver.find_element_by_id("id____UID0")
elem.send_keys(Keys.RETURN)

print("Scraping Banner for the relevant courses...")

soup = BeautifulSoup(driver.page_source, 'lxml')
table = soup.find_all('table', {'class':'datadisplaytable'})[0]

print("Returning with the completed data set...")

df = pd.read_html(str(table), header=0)
df = df[0]
df = df.loc[df['Course'].str.contains('CPSC') | df['Course'].str.contains('DATA')]

df.to_csv('~/Downloads/schedules.csv')

driver.quit()
