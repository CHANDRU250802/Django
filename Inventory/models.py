from django.db import models

class Seller(models.Model):
    company_name = models.CharField(max_length=255)
    gst_number = models.CharField(max_length=15, unique=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15, blank=True, null=True)
    country = models.CharField(max_length=100, default="India")
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    street = models.CharField(max_length=255)
    flat = models.CharField(max_length=255)
    pin_code = models.CharField(max_length=10)
    category = models.CharField(max_length=100)


