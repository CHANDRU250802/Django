from django.shortcuts import render
import re
from django.http import HttpResponse
from django.conf import settings
import os
from django.shortcuts import render, redirect
from .models import Seller

def frontend(request):

    products = [
        {"name": "iPhone 15", "variant": "256 GB", "price": "58,999", "image": "asserts/iPhone_15.webp", "link": "/product/iPhone_15.html"},
        {"name": "Google Pixel 9 Pro", "variant": "256 GB", "price": "79,999", "image": "asserts/Google-Pixel-9-Pro.png", "link": "/product/google_pixel_9_pro.html"},
        {"name": "OnePlus 12", "variant": "512 GB", "price": "79,999", "image": "asserts/oneplus-12.avif", "link": "/product/oneplus_12.html"},
        {"name": "Samsung Galaxy S24", "variant": "128 GB", "price": "99,999", "image": "asserts/s24.jpg", "link": "/product/samsung_galaxy_s24.html"},
        {"name": "OPPO Reno 13 Pro", "variant": "256 GB", "price": "40,999", "image": "asserts/opporeno13Pro.webp", "link": "/product/oppo_reno_13_pro.html"},
        {"name": "Vivo Y300 5G", "variant": "128 GB", "price": "21,999", "image": "asserts/Vivo-Y300-5G.jpg", "link": "/product/vivo_y300_5g.html"},
        {"name": "OPPO F27 Pro+ 5G", "variant": "128 GB", "price": "25,999", "image": "asserts/OPPO_F27_Pro+_5G.jpg", "link": "/product/oppo_f27_pro_5g.html"},
        {"name": "Samsung Galaxy A35 5G", "variant": "128 GB", "price": "28,999", "image": "asserts/in-galaxy-a35-5g.avif", "link": "/product/samsung_galaxy_a35_5g.html"},
        {"name": "Tecno Pova 5 Pro 5G", "variant": "128 GB", "price": "15,999", "image": "asserts/techno pova.jpg", "link": "/product/tecno_pova_5_pro_5g.html"},
        {"name": "iPhone 15 Pro", "variant": "256 GB", "price": "1,44,999", "image": "asserts/81dT7CUY6GL.jpg", "link": "/product/iphone_15_pro.html"},
        {"name": "Reno 8 Pro", "variant": "256 GB", "price": "32,999", "image": "asserts/Reno 8 pro.jpg", "link": "/product/reno_8_pro.html"},
        {"name": "Pixel 8 Pro", "variant": "256 GB", "price": "78,999", "image": "asserts/Pixel 8 pro.jpg", "link": "/product/pixel_8_pro.html"}
    ]
    return render(request, 'index.html', {'products': products})


def seller(request):
    if request.method == 'POST':
        company_name = request.POST.get('companyName')
        gst_number = request.POST.get('gst_number')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        country = request.POST.get('country')
        state = request.POST.get('state')
        city = request.POST.get('city')
        street = request.POST.get('street')
        flat = request.POST.get('flat')
        pin_code = request.POST.get('pin_code')
        category = request.POST.get('category')

        seller = Seller(company_name=company_name, gst_number=gst_number, first_name=first_name, last_name=last_name, email=email, phone=phone, country=country, state=state, city=city, street=street, flat=flat, pin_code=pin_code, category=category)
        seller.save()

        return render(request, 'seller.html', {'success_message': 'Data successfully inserted!'})
    else:
        return render(request, 'seller.html')

def product_detail(request, product_name):
    safe_product_name = re.sub(r'[^a-zA-Z0-9_]', '', product_name.replace(" ", "_"))
    template_path = f'product/{safe_product_name}.html'

    # Check if the template file exists
    full_template_path = os.path.join(settings.BASE_DIR, 'Inventory/templates', template_path)
    if not os.path.exists(full_template_path):
        return HttpResponse(f"Template not found: {full_template_path}", status=404)
    
    return render(request, template_path)

def login(request):
    return render(request, 'login.html' )

def signup(request):
    return render(request, 'signup.html')

def profile(request):
    return render(request, 'profile.html')
def cart(request):
    return render(request, 'cart.html')


