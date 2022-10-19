from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import viewsets

# Create your views here.
class ProjectViewSet(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Project.objects.all()
