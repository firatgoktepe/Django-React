from backend_api.views import ProjectViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'projects', views.ProjectViewSet, basename='project')
urlpatterns = router.urls