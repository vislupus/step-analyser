from django.shortcuts import render
from django.http import (
    Http404,
    HttpResponse,
    HttpResponseNotFound,
    HttpResponseRedirect,
)
from django.urls import reverse


def dashboard(request):
    return render(request, "steps/dashboard.html")


def data_view(request):
    return render(request, "steps/data_view.html")


def calendar(request):
    return render(request, "steps/calendar.html")


def clustering(request):
    return render(request, "steps/clustering.html")


def trips(request):
    return render(request, "steps/trips.html")


def tourist_attractions(request):
    return render(request, "steps/tourist_attractions.html")


def visited_countries(request):
    return render(request, "steps/visited_countries.html")


def steps_settings(request):
    return render(request, "steps/settings.html")
