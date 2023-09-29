---
title: "Project (3hp, grade A-F)"
output:
  html_document:
    self_contained: true
    toc: false
    toc_depth: 2
---

## Summary 

The final part of the course involves an individual project, taking shape as a data blog post. This should illustrate an issue/problem using an unique data set collected by yourself and at the same time illustrate the use of tools taught in this course. Deadline for the project is **2023-01-10 at 18:00**. Hand-in occurs by raising an issue with the title "Project ready for grading" in your `PR_<github_username>` repository.
Shortly after the deadline, we will clone all project repos with such an issue to a local installation. This version will count as your hand-in version. On **2023-01-12** the projects will be presented orally (5 minutes presentation) - presence is compulsory for the session you are presenting in, so please reserve that day in your calendar.

## Inspiration

The below blog posts could be viewed as inspiration or to give a rough idea of the amount of work expected in the projects.

* [The Olympic Medal Table Visualized Gapminder Style.](http://staff.math.su.se/hoehle/blog/2016/08/21/gapMedal.html) [[.Rmd]](https://github.com/hoehleatsu/hoehleatsu.github.io/blob/master/_source/2016-08-21-gapMedal.Rmd)
* [On a First Name Basis with Statistics Sweden](http://staff.math.su.se/hoehle/blog/2017/03/25/scbnames.html) [[.Rmd](https://github.com/hoehleatsu/hoehleatsu.github.io/blob/master/_source/2017-03-25-scbnames.Rmd)]
* [Baby Weight Shiny app](https://shirinsplayground.netlify.app/2020/09/baby_weight_app/)
* [Are #python users more likely to get into Slytherin?](http://www.masalmon.eu/2018/01/01/sortinghat/)

Look for more inspiration at, e.g., [R Weekly](https://rweekly.org/) or [R-Bloggers](https://www.r-bloggers.com/).

Data sources: During the course, you were introduced to a lot of possible data sources.
Additional public web based data sources could, e.g., be the [Stockholm Open Data Portal ](https://dataportalen.stockholm.se/dataportalen/) or an API to query data from [Sweden's national data portal](https://www.dataportal.se/en/datasets?p=1&q=&s=2&t=20&f=&rt=esterms_IndependentDataService%24esterms_ServedByDataService&c=false) .
Another example of a contemporary website for relevant data is the [COVID-19 data](https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/covid-19/statistik-och-analyser/bekraftade-fall-i-sverige/) page by the Swedish Folkhälsomyndigheten.

## Details

The project work has the following elements:

a. find data out in the wild - this can be an open-access SQL database, API data[^1], web scraping data, personal surveillance data (e.g., running watch, log-files), data collected as part of a hobby, ... The raw data should not be of sensitive nature (data protection!) 
and should be accessible and uploadable to Github without violating any copyright or access rights. 
b. determine a good story you can tell based on the data, e.g., a specific hypothesis you want to investigate, a cool visualization of numbers, a data journalism type of story, an educative `#rstats` post, something which might interest your fellow students. Your post can be about a serious matter, but it can also be a not so serious matter. However, make it clear before writing who is your intended readership (general public, fellow B.Sc. students, R users, ornotologists, ...)
c. read the data, wrangle the data, visualize the data, make simple statistical summaries and interpret the results in accordance with the selected story you chose in b. 
d. Write a story worthwhile reading for the selected target audience - it can be written in Swedish or English. The story needs to be written as a reproducible R-Markdown document with HTML backend (see technical details) and should not be excessively long. As a rough guideline: Between 1000-1500 words in the text, no more than 7 figures (tables count as figures). No more than 7 visible code chunks (if you decide to have any at all). Note: You can use the [`wordcountaddin`](https://github.com/benmarwick/wordcountaddin) for RStudio to count the words in your report.
e. Create a 5 minute presentation about your work to present to your fellow students on 2023-01-12. The main aim of your presentation is to convince your fellow students that they should read your blog post. 

The biggest challenge of the project will be to be realistic about what you can achieve within the given deadline. Once you have an estimate of how much that could be, take 50% of that and you are still likely to be busy. Make sure you have a working project early on and then scale up iteratively, so you're always ready. Start early.

## Technical details

For every student we will create a private `PR_<username>` GitHub repository as part of the [MT4007-HT22 organisation](https://github.com/MT4007-HT22), which only you and the teachers of the course have read/write access to (similar setup as your `HW_<username>` repo) and which follow a generic template. At the project deadline we will pull all repos, which have an issue "Project work submitted".

At submission, your repo should at least contain the following files:
```
PR_jensjensen/Report/report.Rmd
PR_jensjensen/Report/report.html
PR_jensjensen/Presentation/presentation.Rmd
PR_jensjensen/Presentation/presentation.html
```
where `jensjensen` is to be substituted with your GitHub user name. Note: It's important to use **exactly** the filenames as above, since we will extract report and presentation automatically from your repository. Furthermore, ensure that any support files like data files, graphics, etc. which are needed to compile the .Rmd documents, are part of the repository. Similar to when creating R packages this would mean to put R preprocessing files in the folder `R` and data in a directory `data`. One exception are data aquired by using private API-keys. To this end, make a `R/query_data.R` script, which imports the API key stored somewhere outside the git, does all the work and finally stores the data using `save` in the `data` directory. Your R Markdown report should then access the data by using `load`. 

The data remain private as part of the `PW_<username>` repository, but your project report HTML-file will be made accessible to the teachers and students of the course.

In contrast to the homework exercises we use HTML as backend for the project report, see e.g. [Section 3.1](https://bookdown.org/yihui/rmarkdown/html-document.html) of the *R Markdown: The definite guide* for options to customize. In order to ensure portability of the HTML reports please use the following as part of your YAML header:

```
----
title: The snappy title of your project
author: Jens Jensen <jens.jensen@student.su.se>
date: 2021-01-15
output:
  html_document:
    self_contained: true
    toc: true
    toc_depth: 2
---
```

The template in your repo already contains these options.

Final note: For the presentation the data wrangling steps do not need to be repeated. One can either import all data generated by  `report.Rmd` using `load` or use some other type of caching.

## Grading

The project will be graded based on the following five dimensions, which have equal weight:

a. Technical difficulty of the project, i.e. how hard to get the data imported, how much time needed to wrangle, how advanced are some of the methods to get statistical summaries, use of additional technical shenanigans[^2], 
b. Coding style and reproducibility of the Rmd file. This includes an assessment of, whether problems were solved tidyverse style.
c. Quality of the visualisations and their interpretation. 
d. Readability of the project report (is the story concise, are the aims clear, is the readership happy, decent spelling & grammar). In particular: Less is sometimes more! 
e. Quality of the presentation (slides, snore factor, **staying in time**, ...)

**Lycka till!**

[^1]: If you want to use SCB data extractable by their web interface, please us the [`pxweb`](https://cran.r-project.org/web/packages/pxweb/index.html) package for this instead.

[^2]: Examples: using a [`targets` pipeline](https://books.ropensci.org/targets/) (Sect. 10.1), visualize using an interactive [Shiny app](https://shiny.rstudio.com/) , [parallel computing](https://future.futureverse.org/), ... Projekt
