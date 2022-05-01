<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="header">
                    <slot name="header"></slot>
                </div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>