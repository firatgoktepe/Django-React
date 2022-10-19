from django.contrib import admin
from .models import Project
# Register your models here.

class ProjectAdmin(admin.ModelAdmin):
    list = ('code', 'name', 'location', 'area', 'surface_app', 'point_area', 'delivery_date', 'ral_code', 'pipe_time', 'node_time', 'point_time', 'pipe_dict', 'node_dict', 'pipe_point_dict')

    admin.site.register(Project)