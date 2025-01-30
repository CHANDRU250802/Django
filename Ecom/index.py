from django.http import HttpRequest
from django.shortcuts import render

def webpage1(request):
    return render(request,'index.html')

def webpage2(request):
    return render(request,'seller.html')


