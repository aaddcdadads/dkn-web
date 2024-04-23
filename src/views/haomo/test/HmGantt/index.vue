<template>
    <HmGantt class="erGraphDemo1"></HmGantt>
    <HmGantt class="erGraphDemo2" :innerHeight="300" :headerHeight="200" :autoInnerHeight=false :columns="columns"
        :data="data" :items="items" :actions="actions"></HmGantt>
</template>

<script>
import HmGantt from '@/components/built-in/jeecg/haomo/HmGantt/index.vue'

export default {
    components: {
        HmGantt
    },
    data() {
        return {
            columns: [
                {
                    id: "id",
                    label: "ID",
                    width: 80,
                    header: {
                        content: "ID",
                    },
                },
                {
                    id: "label",
                    data: "label",
                    sortable: "label",
                    isHTML: false,
                    width: 230,
                    header: {
                        content: "Label",
                    },
                },
                {
                    id: "test",
                    data: "test",
                    sortable: "test",
                    isHTML: false,
                    width: 230,
                    header: {
                        content: "测试",
                    },
                },
            ],
            data: [
                {
                    id: "1",
                    label: "Row 1",
                    test: "aaaa"
                },
                {
                    id: "2",
                    label: "Row 2",
                    test: "bbb"
                },
                {
                    id: "3",
                    label: "Row 4",
                    test: "ccc"
                },
            ],
            items: [
                {
                    id: "1",
                    label: "Item 1",
                    rowId: "2",
                    time: {
                        start: "2020-01-04",
                        end: "2020-01-05",
                    },
                },
                {
                    id: "2",
                    label: "Item 2",
                    rowId: "3",
                    time: {
                        start: "2020-02-04",
                        end: "2020-02-05",
                    },
                },
            ],
            actions: {}
        }
    },
    mounted() {
        this.actions = { "list-column-row": [this.addAlertButtonAction] }
    },
    methods: {
        /**
         * 参考示例
         * @param {*} el 
         * @param {*} mainData 
         */
        addAlertButtonAction(el, mainData) {
            function onClick() {
                alert(mainData.row.label);
            }

            function addButton() {
                if (mainData.column.id !=="gstcid-test") return; 
                const button = document.createElement("button");
                button.classList.add("my-alert-button");
                button.innerText = "alert";
                button.addEventListener("click", onClick);
                const label = el.querySelector(".gstc__list-column-row-content");
                if (label) label.appendChild(button);
            }

            function removeButton(el) {
                const button = el.querySelector(".my-alert-button");
                if (button) button.remove();
            }

            addButton();

            return {
                update(el, updatedData) {
                    mainData = updatedData;
                },
                destroy(el, data) {
                    removeButton(el);
                },
            };
        }
    },
}
</script>
<style scoped>
.erGraphDemo1 {
    float: left;
    width: 50%;
    height: 100vh;
}

.erGraphDemo2 {
    float: right;
    width: 50%;
    height: 100vh;
}
</style>