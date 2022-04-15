<template>
    <div>
        <header>
            <slot name="header">
                <h2>This is a default sloat</h2>
            </slot>
        </header>
        <content>
            <slot name="content">
                <p>Default conter</p>
            </slot>
        </content>
        <footer>
            <slot name="footer">
                <h3>Default footer</h3>
            </slot>
        </footer>
    </div>
</template>

<style scoped>

</style>