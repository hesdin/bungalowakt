<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"  @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Bungalow AKT - Penginapan privat di Wakatobi, Sulawesi Tenggara. Nikmati liburan tenang di tepi laut dengan akses langsung ke terumbu karang.">
        <meta name="robots" content="index, follow">
        <meta name="author" content="Bungalow AKT">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="Bungalow AKT">
        <meta property="og:title" content="Bungalow AKT - Liburan Tenang di Wakatobi">
        <meta property="og:description" content="Penginapan privat di Wakatobi, Sulawesi Tenggara. Nikmati liburan tenang di tepi laut dengan akses langsung ke terumbu karang.">
        <meta property="og:url" content="{{ config('app.url') }}">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="Bungalow AKT - Liburan Tenang di Wakatobi">
        <meta name="twitter:description" content="Penginapan privat di Wakatobi, Sulawesi Tenggara. Nikmati liburan tenang di tepi laut dengan akses langsung ke terumbu karang.">

        <link rel="canonical" href="{{ config('app.url') }}">

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        @vite(['resources/css/app.css', 'resources/js/app.ts'])
        <x-inertia::head>
            <title>{{ config('app.name', 'Bungalow AKT') }}</title>
        </x-inertia::head>
    </head>
    <body class="font-sans antialiased">
        <x-inertia::app />
    </body>
</html>
