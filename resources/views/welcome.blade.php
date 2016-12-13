@extends('layouts.app')

@section('main-content')
 <router-link to="/">Home</router-link>
 <router-link to="/user">Go to Foo</router-link>

<router-view></router-view>
@endsection
