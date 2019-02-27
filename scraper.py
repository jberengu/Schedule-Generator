from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("www.python.org")
assert "Python" in driver.title
elem = driver.find_element_by_name("q")
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
driver.close()









#import requests
#from bs4 import BeautifulSoup
#import smtplib
#from email.mime.multipart import MIMEMultipart
#from email.mime.text import MIMEText
#from email.mime.base import MIMEBase
#from email import encoders

#links = []

'''
def govDeals_Search(start_row, rowCount, query):
    query = query.replace("&", ",%20")
    print(query)

    url = 'https://www.govdeals.com/index.cfm?fa=Main.AdvSearchResultsNew&kWord=' + query + '&whichForm=vehicle&searchPg=Main&' + str(rowCount) + '&' + str(start_row)
    source_code = requests.get(url)
    plain_text = source_code.text
    soup = BeautifulSoup(plain_text, "html.parser")
    for link in soup.findAll('td', {'valign': 'top'}):
        for a in link.findAll('a'):
            href = a.get('href')
            text = a.string
            if href == 'https://www.govdeals.com/index.cfm?fa=Main.Comments' or href == 'https://www.govdeals.com/index.cfm?fa=Main.Sitemap' or href == 'https://www.liquidityservices.com':
                href = None
            if href != None and (text != 'Contact us' or text != 'Site Map' or text != 'None'):
                out_link = 'https://www.govdeals.com/' + href
                links.append('List Title: ' + text + '\n' + 'LINK: ' + out_link + '\n\n')
                description_source = requests.get('https://www.govdeals.com/' + href)
                desc_text = description_source.text
                soup = BeautifulSoup(desc_text, "html.parser")



queryGovDeals = 'Toyota&Tacoma, Unimog, quigley, 4x4&E350,4x4&E-350, e350&diesel, e-350&diesel, F-350&Diesel&4wd, F350&Diesel&4x4'
queryGovDeals = [x.strip() for x in queryGovDeals.split(',')]

for q in queryGovDeals:
    govDeals_Search(1, 50, q)

linkSet = set(links)
linksList = list(linkSet)
linksList.sort()
file = open('output.txt', "w+")
for i in linksList:
    print(i)
    file.write(i)
file.close()

fromaddr = "scraperoutput@gmail.com"
toaddr = "danielzamojda@gmail.com"
msg = MIMEMultipart()

msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "Output of Scraper"

body = "Here it is!"

msg.attach(MIMEText(body, 'plain'))

filename = "output.txt"
attachment = open("./output.txt", "rb")

part = MIMEBase('application', 'octet-stream')
part.set_payload((attachment).read())
encoders.encode_base64(part)
part.add_header('Content-Disposition', "attachment; filename= %s" % filename)

msg.attach(part)

server = smtplib.SMTP('smtp.gmail.com', 587)
server.starttls()
server.login(fromaddr, "memes420")
text = msg.as_string()
server.sendmail(fromaddr, toaddr, text)
server.quit()
file.close()

'''