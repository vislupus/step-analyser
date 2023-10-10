from django.urls import path
from . import views

urlpatterns = [
    path("", views.dashboard, name="dashboard"),
    path("data-view/", views.data_view, name="data-view"),
    path("calendar/", views.calendar, name="calendar"),
    path("clustering/", views.clustering, name="clustering"),
    path("trips/", views.trips, name="trips"),
    path("tourist-attractions/", views.tourist_attractions, name="tourist-attractions"),
    path("visited-countries/", views.visited_countries, name="visited-countries"),
    path("settings/", views.steps_settings, name="settings"),
]
