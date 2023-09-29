
$$
  5+5 = 10
$$

```python
import numpy as np
import requests
from bs4 import BeautifulSoup
```

# This is some Markdown!


```python
URL = "https://cloud.timeedit.net/su/web/stud1/s.html?tab=3&object=cevt_48182_HT2023&startDate=20230930&endDate=20240413&type=courseevent&h=t&l=en"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
```


```python
results = soup.find_all("tr", class_="rr")
```


```python
save_data = []
for tr in results:
    tds = tr.find_all("td")
    save_data.append([
        s.text for s in tds[1:4]
    ])

#save_data = [dict(zip(["day", "date", "time"], values)) for values in save_data]
```


```python
output = ""
i = 1
for d in save_data:
    output += "<tr>"
    output += f"<td>{i}</td>"
    output += "<td>"
    output += d["day"] + " " + d["date"] + ", <br>"
    output += d["time"]
    output += "</td>"
    output += "<td>Topic</td>"
    output += "</tr>"
    i+=1
```


```python
output
```




    '<tr><td>1</td><td>Tue 2023-10-31, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>2</td><td>Tue 2023-11-07, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>3</td><td>Fri 2023-11-10, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>4</td><td>Tue 2023-11-14, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>5</td><td>Fri 2023-11-17, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>6</td><td>Tue 2023-11-21, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>7</td><td>Fri 2023-11-24, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>8</td><td>Tue 2023-11-28, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>9</td><td>Fri 2023-12-01, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>10</td><td>Tue 2023-12-05, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>11</td><td>Fri 2023-12-08, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>12</td><td>Tue 2023-12-12, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>13</td><td>Fri 2023-12-15, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>14</td><td>Tue 2023-12-19, <br>13:00 - 17:00</td><td>Topic</td></tr><tr><td>15</td><td>Fri 2024-01-12, <br>12:00 - 18:00</td><td>Topic</td></tr>'




```python
s = BeautifulSoup(output, "html.parser")
#print(s.prettify())
```


```python
page = requests.get("https://mt4007-ht22.github.io/schedule.html")

soup = BeautifulSoup(page.content, "html.parser")
```


```python
res = soup.find("tbody")
res = res.find_all("tr")

topics = []
for row in res:
    tds = row.find_all("td")
    topics.append(tds[3].text)
```


```python
topics
```




    ['Introduction. Software,\nGitHub and Markdown. [Lecture\nSlides], We start at 9am. Handledning starts as soon as lecture\nis done.',
     'Tidyverse, Basic dplyr and\nggplot2. [Lecture Slides],\nWe start at 9am. Handledning starts as soon as lecture is done.',
     'Tidyverse: group_by and\nsummarise, more ggplot2., Peer review 08:45-09:30,\nhandledning 09:30-11:30',
     'Exploratory data\nanalysis., handledning 09:30-11:30',
     'Cleaning\ndata: Tidy data. Long to wide and back., Peer review\n08:45-09:30, handledning 09:30-11:30',
     'Relational data: Combining\ntables with dplyr joins., handledning 09:30-11:30',
     'Relational data: SQL\nbasics., Peer review 08:45-09:30, handledning\n09:30-11:30',
     'Text\ndata: Regular expressions., Info on project by\nMichael 08:45-09:30, handledning 09:30-11:30',
     'Using\nAPIs: httr, JSON and XML., Peer review 08:45-09:30,\nhandledning 09:30-11:30',
     'R\nprogramming: Functional programming, aka functions!,\nhandledning 09:30-11:30',
     'Intro\nto Webscraping, Peer review 08:45-09:30, handledning\n09:30-11:30',
     'R\nProgramming: Functional programming with purrr,\nQuestions on project to Michael: 9AM, check Moodle for\nZoom-link!, handledning 09:30-11:30',
     'Wrap-up and option for questions, Peer\nreview 08:45-09:30, handledning 09:30-11:30',
     'Zoom meeting with option for questions in preparation\nfor exam! Work on project!',
     'Exam']




```python
full = [inner_list + [value] for inner_list, value in zip(save_data, topics)]
```


```python
output = ""
i = 1
for d in full:
    output += "<tr>"
    output += f"<td>{i}</td>"
    output += "<td>"
    output += d[0] + " " + d[1] + ", <br>"
    output += d[2]
    output += "</td>"
    output += f"<td>{d[3]}</td>"
    output += "</tr>"
    i+=1
```


```python
s = BeautifulSoup(output, "html.parser")
print(s.prettify())
```

    <tr>
     <td>
      1
     </td>
     <td>
      Tue 2023-10-31,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Introduction. Software,
    GitHub and Markdown. [Lecture
    Slides], We start at 9am. Handledning starts as soon as lecture
    is done.
     </td>
    </tr>
    <tr>
     <td>
      2
     </td>
     <td>
      Tue 2023-11-07,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Tidyverse, Basic dplyr and
    ggplot2. [Lecture Slides],
    We start at 9am. Handledning starts as soon as lecture is done.
     </td>
    </tr>
    <tr>
     <td>
      3
     </td>
     <td>
      Fri 2023-11-10,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Tidyverse: group_by and
    summarise, more ggplot2., Peer review 08:45-09:30,
    handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      4
     </td>
     <td>
      Tue 2023-11-14,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Exploratory data
    analysis., handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      5
     </td>
     <td>
      Fri 2023-11-17,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Cleaning
    data: Tidy data. Long to wide and back., Peer review
    08:45-09:30, handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      6
     </td>
     <td>
      Tue 2023-11-21,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Relational data: Combining
    tables with dplyr joins., handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      7
     </td>
     <td>
      Fri 2023-11-24,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Relational data: SQL
    basics., Peer review 08:45-09:30, handledning
    09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      8
     </td>
     <td>
      Tue 2023-11-28,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Text
    data: Regular expressions., Info on project by
    Michael 08:45-09:30, handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      9
     </td>
     <td>
      Fri 2023-12-01,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Using
    APIs: httr, JSON and XML., Peer review 08:45-09:30,
    handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      10
     </td>
     <td>
      Tue 2023-12-05,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      R
    programming: Functional programming, aka functions!,
    handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      11
     </td>
     <td>
      Fri 2023-12-08,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Intro
    to Webscraping, Peer review 08:45-09:30, handledning
    09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      12
     </td>
     <td>
      Tue 2023-12-12,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      R
    Programming: Functional programming with purrr,
    Questions on project to Michael: 9AM, check Moodle for
    Zoom-link!, handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      13
     </td>
     <td>
      Fri 2023-12-15,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Wrap-up and option for questions, Peer
    review 08:45-09:30, handledning 09:30-11:30
     </td>
    </tr>
    <tr>
     <td>
      14
     </td>
     <td>
      Tue 2023-12-19,
      <br/>
      13:00 - 17:00
     </td>
     <td>
      Zoom meeting with option for questions in preparation
    for exam! Work on project!
     </td>
    </tr>
    <tr>
     <td>
      15
     </td>
     <td>
      Fri 2024-01-12,
      <br/>
      12:00 - 18:00
     </td>
     <td>
      Project presentation.
     </td>
    </tr>
    



```python

```
