@extends('layouts.app')

@section('main-content')
<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Bordered Table</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
        <table class="table table-bordered">
            <tr>
                <th style="width: 10px">ID</th>
                <th>Name</th>
                <th>Email</th>
                <th style="width: 40px">#</th>
            </tr>            

            <tr v-for="user in users">

                <td>@{{user.id}}</td>
                <td>@{{user.name}}</td>
                <td>@{{user.email}}
                </td>
                <td><span class="badge bg-red">55%</span></td>
            </tr>                

        </table>
    </div>
    <!-- /.box-body -->
    <div class="box-footer clearfix">
        {{ $users->links() }}
    </div>
    
</div>
<!-- /.box -->
@endsection
