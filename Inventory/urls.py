from django.urls import path
from .views import *

urlpatterns = [
    path('', frontend, name='index'),
    path('seller/', seller, name='seller'),
    path('<str:product_name>/', product_detail, name='product_detail'),
    path('login/', login, name='login'),
    path('signup/', signup, name='signup'),
    path('profile/', profile, name='profile'),
    path('cart/',cart, name='cart'),
]
