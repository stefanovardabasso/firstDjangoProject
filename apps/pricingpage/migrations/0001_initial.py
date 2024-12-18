# Generated by Django 5.1.1 on 2024-10-16 10:44

import ckeditor.fields
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('lang', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='pricing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('slug', models.CharField(blank=True, max_length=255, null=True)),
                ('price', models.CharField(max_length=255)),
                ('description', ckeditor.fields.RichTextField()),
                ('button_text', models.CharField(max_length=200)),
                ('button_url', models.CharField(max_length=255)),
                ('is_featured', models.BooleanField(default=False)),
                ('featured_badge_title', models.CharField(blank=True, max_length=200, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('language', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pricing_language', to='lang.languages')),
            ],
        ),
        migrations.CreateModel(
            name='pricingPageSEO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meta_title', models.CharField(blank=True, max_length=200, null=True)),
                ('meta_description', models.CharField(blank=True, max_length=255, null=True)),
                ('language', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pricing_page_seo_language', to='lang.languages')),
            ],
        ),
        migrations.CreateModel(
            name='pricingSectionTitle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title_small', models.CharField(blank=True, max_length=200, null=True)),
                ('title_big', models.CharField(blank=True, max_length=200, null=True)),
                ('language', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='pricing_section_title_language', to='lang.languages')),
            ],
        ),
    ]
