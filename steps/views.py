from django.shortcuts import render
from django.http import Http404, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse


def dashboard(request):
    return render(request, "steps/index.html")


def map(request):
    return render(request, "steps/map.html")


def clustering(request):
    return render(request, "steps/clustering.html")


def data_view(request):
    return render(request, "steps/data_view.html")


def steps_settings(request):
    return render(request, "steps/steps_settings.html")
