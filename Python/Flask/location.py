from geopy.geocoders import Nominatim
geolocator = Nominatim(user_agent="hello.py")
location = geolocator.geocode("133 Calderstone Road")
print(location.address)
#print((location.latitude, location.longitude))
#print(location.raw)
