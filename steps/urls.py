from django.urls import path
from . import views

urlpatterns = [
    path("", views.dashboard, name="dashboard"),
    path("map/", views.map, name="map-people"),
    path("clustering/", views.clustering, name="steps-clustering"),
    path("data-view/", views.data_view, name="data-view"),
    path("trips/", views.trips, name="trips"),
    path("settings/", views.steps_settings, name="steps-settings"),
]
