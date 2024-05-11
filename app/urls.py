from django.urls import path
from . import views


urlpatterns = [
    path('', views.main),
    path('get_response/', views.Answer_Prompt)
]
