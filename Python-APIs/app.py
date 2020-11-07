import streamlit as st
import urllib.error, urllib.parse, urllib.request
import requests
import json

st.title('Python APIs dashboard')
st.markdown('A dashboard to access data via various open sourced APIs.')
st.markdown('Select any of the functions from the sidebar to see how it works. Got the APIs from [Rapid API](https://rapidapi.com/)')
st.markdown('__Made by Saumya Bhatt__')

st.sidebar.title('List of functions')
st.sidebar.markdown('Select any of the functions given below')

st.sidebar.subheader('MovieInfo 🎬')
st.sidebar.markdown('Enter a movie name and get all the details you need below')
if not st.sidebar.checkbox('Hide',True, key=0):
    st.markdown('## __MovieInfo__ 🎬')
    st.markdown('Enter a movie name and get all the details you need below. Get the API [here](https://rapidapi.com/hmerritt/api/imdb-internet-movie-database-unofficial)')
    inp = st.text_input('Enter movie name')

    url = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/'+inp

    headers = {
        'x-rapidapi-host': "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        'x-rapidapi-key': "42a81c1684msh89e08ede69c15b4p1df539jsn876cffad9666"
        }

    try:
        response = requests.request('GET',url,headers=headers)
        store = response.json()

        title = store["title"]
        year = store["year"]
        plot = store["plot"]
        count = 0
        actors = list()
        for i in store["cast"]:
            if count > 5:
                break
            actors.append(i['actor'])
            count += 1

        st.markdown('> Movie Title : %s'%title)
        st.markdown('> Year of release : %s'%year)
        st.markdown('> Plot : %s'%plot)
        st.markdown('> Cast : %s'%actors)

    except:
        print('Enter a value')

st.sidebar.subheader('Weather Info ☁️')
st.sidebar.markdown('Get the weather data of the location entered')
if not st.sidebar.checkbox('Hide',True, key=1):

    st.markdown('## __Weather Info__ ☁️')
    st.markdown('Get the weather data of the location entered. Get the API [here](https://rapidapi.com/community/api/open-weather-map)')
    url = "https://community-open-weather-map.p.rapidapi.com/weather"

    inp = st.text_input('Enter your location')

    querystring = {"callback":"test","id":"2172797","units":"%22metric%22 or %22imperial%22","mode":"xml%2C html","q":inp}

    headers = {
        'x-rapidapi-host': "community-open-weather-map.p.rapidapi.com",
        'x-rapidapi-key': "313c32bd8cmsh267a7d2977b0b69p1e33d5jsnccd8af3b0eb7"
        }

    try:

        response = requests.request("GET", url, headers=headers, params=querystring)

        store = response.text.split('test')
        store1 = store[1].split('(')
        store2 = store1[1].split(')')
        data = json.loads(store2[0])

        for i in  data['weather']:
            weather = i['description']
        kelvin = data['main']['feels_like']
        temp = kelvin - 273.15
        humidity = data['main']['humidity']

        st.markdown('> Weather : %s'%weather)
        st.markdown('> Temperature : %i °C'%(round(temp,2)))
        st.markdown('> Humidity : %i'%humidity)

    except:
        print('Enter a value')

st.sidebar.subheader('Superhero Info 🦹‍♂️')
st.sidebar.markdown('Get the complete details of your favourite Marvel/DC superhero/villain')
if not st.sidebar.checkbox('Hide',True, key=2):
    st.markdown('## __Superhero Info__ 🦹‍♂️')
    st.markdown('Get the complete details of your favourite Marvel/DC superhero/Villain by typing their name. Get the API [here](https://rapidapi.com/jakash1997/api/superhero-search)')

    url = "https://superhero-search.p.rapidapi.com/"

    inp = st.text_input('Enter the name of the superhero')
    querystring = {"hero":inp}

    headers = {
        'x-rapidapi-host': "superhero-search.p.rapidapi.com",
        'x-rapidapi-key': "313c32bd8cmsh267a7d2977b0b69p1e33d5jsnccd8af3b0eb7"
        }

    response = requests.request("GET", url, headers=headers, params=querystring)

    try:
        data = json.loads(response.text)

        st.markdown('> Fullname : %s'%data['biography']['fullName'])
        st.markdown('> Work : %s'%data['work']['occupation'])
        st.markdown('> Place of birth : %s'%data['biography']['placeOfBirth'])
        st.markdown('> Relatives : %s'%data['connections']['relatives'])

        st.markdown('> Appearance:')
        for i in data['appearance']:
            if i == 'height':
                st.markdown('>> - Height : %s'%data['appearance'][i][1])
                continue
            if i == 'weight':
                st.markdown('>> - Weight : %s'%data['appearance'][i][1])
                continue
            st.markdown('>> - %s : %s'%(i,data['appearance'][i]))

    except:

        print('Enter a value')

st.sidebar.subheader('Covid Zones 😷')
st.sidebar.markdown('See in which Covid zone does your are lies. (Applicable only for India)')
if not st.sidebar.checkbox('Hide',True,key=3):
    st.markdown('## __Covid Zones__ 😷')
    st.markdown('Enter the name of your place and see in which designated covid area it lies. (Applicable only for India). Get the API [here](https://api.covid19india.org/)')

    url = "https://api.covid19india.org/zones.json"

    info = urllib.request.urlopen(url)
    store = json.loads(info.read())

    inp = st.text_input('Enter name of your town/City/State')

    for item in store["zones"]:
        if item["district"] == inp:
            st.markdown('> Zone : %s'%item['zone'])



