from backend_api.views import MovieViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'movies', views.MovieViewSet, basename='movie')
urlpatterns = router.urls