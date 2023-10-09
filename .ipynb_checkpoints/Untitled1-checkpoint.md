```python
import numpy as np
import pandas as pd
!pip install matplotlib
```

    Requirement already satisfied: matplotlib in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (3.8.0)
    Requirement already satisfied: contourpy>=1.0.1 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (1.1.1)
    Requirement already satisfied: cycler>=0.10 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (0.12.0)
    Requirement already satisfied: fonttools>=4.22.0 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (4.43.1)
    Requirement already satisfied: kiwisolver>=1.0.1 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (1.4.5)
    Requirement already satisfied: numpy<2,>=1.21 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (1.26.0)
    Requirement already satisfied: packaging>=20.0 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (23.2)
    Requirement already satisfied: pillow>=6.2.0 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (10.0.1)
    Requirement already satisfied: pyparsing>=2.3.1 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (3.1.1)
    Requirement already satisfied: python-dateutil>=2.7 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from matplotlib) (2.8.2)
    Requirement already satisfied: six>=1.5 in /Users/tana2011/anaconda3/envs/py_env/lib/python3.12/site-packages (from python-dateutil>=2.7->matplotlib) (1.16.0)



```python
df = pd.DataFrame(np.random.uniform(-.75,1, size=(100,3)))
```


```python
df.cumsum(axis=0).plot()
```




    <Axes: >




    
![png](Untitled1_files/Untitled1_2_1.png)
    



```python

```
