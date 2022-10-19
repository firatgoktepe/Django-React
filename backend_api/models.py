from django.db import models

# Create your models here.
class Project(models.Model):
    code = models.CharField(max_length=250)
    name = models.CharField(max_length=250)
    location = models.CharField(max_length=250)
    area = models.CharField(max_length=250)
    surface_app = models.CharField(max_length=250)
    point_area = models.CharField(max_length=250)
    delivery_date = models.CharField(max_length=250)
    ral_code = models.CharField(max_length=250)
    pipe_time = models.CharField(max_length=250)
    node_time = models.CharField(max_length=250)
    point_time = models.CharField(max_length=250)
    pipe_dict = models.CharField(max_length=250)
    node_dict = models.CharField(max_length=250)
    pipe_point_dict = models.CharField(max_length=250)

    def __str__(self):
        return self.name