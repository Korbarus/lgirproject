from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def login_view(request, *args, **kwargs):
    if request.method == "GET":
        return render(request, "index.html")