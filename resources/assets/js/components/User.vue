<template>
<div class="box">
    <div class="box-header with-border">
        <h3 class="box-title">Bordered Table</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">        
        {{ message }}
    </div>
    <!-- /.box-body -->
    <div class="box-footer clearfix">
        
    </div>

</div>

</template>

<script>
    export default {
        data: function(){
                return {
            message: 'This is message from user component.'
            }
        },
        mounted() {
            console.log('Component ready.')
        }
    }
</script>
