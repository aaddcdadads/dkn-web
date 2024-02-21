<template>
	<div class="page card">
		<div class="page-wrapper">
			<div class="ele-wrapper ele-wrapper-backgroundTwo">
				<hm-bg-card
					ref="backgroundTwo"
					width="100%"
					height="100%"
					border-radius="0"
					padding="0"
					class="ele-backgroundTwo"
				>
				</hm-bg-card>
			</div>
			<div class="ele-wrapper ele-wrapper-backgroundThree">
				<hm-bg-card
					ref="backgroundThree"
					width="100%"
					height="714"
					border-radius="0"
					padding="0"
					class="ele-backgroundThree"
				>
					<div class="ele-wrapper ele-wrapper-accountList">
						<hm-ant-bg-text
							ref="accountList"
							text="账号列表"
							font-size="16px"
							:text-align="'left'"
							class="ele-accountList"
						>
						</hm-ant-bg-text>
					</div>
					<div class="ele-wrapper ele-wrapper-addAccountNumber">
						<hm-ant-button
							ref="addAccountNumber"
							text="新增账号"
							:type="'primary'"
							:size="''"
							@click="onAddAccountNumberClick"
							class="ele-addAccountNumber"
						>
						</hm-ant-button>
					</div>
					<div class="ele-wrapper ele-wrapper-userList">
						<hm-ant-table
							ref="userList"
							:columns="userList.columns"
							:data="userList.data"
							:pagination="userList.pagination"
							:show-column-no="userList.showColumnNo"
							:url="userList.url"
							:params="userList.params"
							:actions="userList.actions"
							:combined="userList.combined"
							class="ele-userList"
						>
						</hm-ant-table>
					</div>
					<div class="ele-wrapper ele-wrapper-editModal">
						<hm-modal
							ref="editModal"
							:title="editModal.title"
							:visible="editModal.visible"
							:height="editModal.height"
							@ok="onEditModalOk"
							@cancel="onEditModalCancel"
						>
							<div class="ele-wrapper ele-wrapper-backgroundFour">
								<hm-bg-card
									ref="backgroundFour"
									width="100%"
									height="100%"
									border-radius="0"
									:text-align="'right'"
									padding="0"
									box-shadow-v-shadow="0"
									box-shadow-color="#FFFFFF"
									class="ele-backgroundFour"
								>
									<div class="ele-wrapper ele-wrapper-editUsername">
										<hm-ant-input
											ref="editUsername"
											v-model:value="editUsername.value"
											title="用户名"
											width="87%"
											class="ele-editUsername"
										>
										</hm-ant-input>
									</div>
									<div class="ele-wrapper ele-wrapper-editRealname">
										<hm-ant-input
											ref="editRealname"
											v-model:value="editRealname.value"
											title="昵称"
											width="90%"
											class="ele-editRealname"
										>
										</hm-ant-input>
									</div>
									<div class="ele-wrapper ele-wrapper-editRolename">
										<hm-ant-select
											ref="editRolename"
											v-model:value="editRolename.value"
											title="角色"
											placeholder="请选择角色"
											width="90%"
											class="ele-editRolename"
										>
										</hm-ant-select>
									</div>
									<div class="ele-wrapper ele-wrapper-editDepartment">
										<hm-ant-cascader
											ref="editDepartment"
											v-model:value="editDepartment.value"
											title="部门"
											width="90%"
											class="ele-editDepartment"
										>
										</hm-ant-cascader>
									</div>
									<div class="ele-wrapper ele-wrapper-editSex_dictText">
										<hm-ant-select
											ref="editSex_dictText"
											v-model:value="editSex_dictText.value"
											title="性别"
											placeholder="请选择性别"
											:options="editSex_dictText.options"
											width="90%"
											class="ele-editSex_dictText"
										>
										</hm-ant-select>
									</div>
									<div class="ele-wrapper ele-wrapper-editBirthday">
										<hm-ant-date-picker
											ref="editBirthday"
											title="生日"
											v-model:value="editBirthday.value"
											width="90%"
											class="ele-editBirthday"
										>
										</hm-ant-date-picker>
									</div>
									<div class="ele-wrapper ele-wrapper-editPhone">
										<hm-ant-input
											ref="editPhone"
											v-model:value="editPhone.value"
											title="手机"
											width="90%"
											class="ele-editPhone"
										>
										</hm-ant-input>
									</div>
									<div class="ele-wrapper ele-wrapper-editEmail">
										<hm-ant-input
											ref="editEmail"
											v-model:value="editEmail.value"
											title="邮箱"
											width="90%"
											class="ele-editEmail"
										>
										</hm-ant-input>
									</div>
									<div class="ele-wrapper ele-wrapper-editStatus_dictText">
										<hm-ant-select
											ref="editStatus_dictText"
											v-model:value="editStatus_dictText.value"
											title="状态"
											placeholder="状态"
											:options="editStatus_dictText.options"
											width="90%"
											class="ele-editStatus_dictText"
										>
										</hm-ant-select>
									</div>
								</hm-bg-card>
							</div>
						</hm-modal>
					</div>
					<div class="ele-wrapper ele-wrapper-addUserModal">
						<hm-modal
							ref="addUserModal"
							:title="addUserModal.title"
							:visible="addUserModal.visible"
							:height="addUserModal.height"
							@ok="onAddUserModalOk"
							@cancel="onAddUserModalCancel"
						>
							<div class="ele-wrapper ele-wrapper-backgroundFive">
								<hm-bg-card
									ref="backgroundFive"
									width="100%"
									height="100%"
									border-radius="0"
									:text-align="'right'"
									padding="0"
									box-shadow-v-shadow="0"
									box-shadow-color="#FFFFFF"
									class="ele-backgroundFive"
								>
									<div class="ele-wrapper ele-wrapper-newUsername">
										<hm-ant-input
											ref="newUsername"
											v-model:value="newUsername.value"
											title="用户名"
											width="87%"
											class="ele-newUsername"
										>
										</hm-ant-input>
									</div>
									<div class="ele-wrapper ele-wrapper-newRealname">
										<hm-ant-input
											ref="newRealname"
											v-model:value="newRealname.value"
											title="昵称"
											width="90%"
											class="ele-newRealname"
										>
										</hm-ant-input>
									</div>
								</hm-bg-card>
							</div>
						</hm-modal>
					</div>
					<div class="ele-wrapper ele-wrapper-deleteAccount">
						<hm-modal
							ref="deleteAccount"
							:title="deleteAccount.title"
							:visible="deleteAccount.visible"
							:width="deleteAccount.width"
							:height="deleteAccount.height"
							@ok="onDeleteAccountOk"
							@cancel="onDeleteAccountCancel"
						>
							<div
								class="
									ele-wrapper ele-wrapper-de0dca05-d480-443b-ade9-4e99fef4fd40
								"
							>
								<hm-ant-bg-text
									text="是否删除该账号？"
									font-size="14px"
									class="ele-de0dca05-d480-443b-ade9-4e99fef4fd40"
								>
								</hm-ant-bg-text>
							</div>
						</hm-modal>
					</div>
				</hm-bg-card>
			</div>
		</div>
	</div>
</template>

<script>
import { h } from "vue";
import HmBgCard from "/@/components/built-in/layout/HmBgCard.vue";
import HmAntBgText from "/@/components/built-in/jeecg/HmAntBgText.vue";
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmAntTable from "/@/components/built-in/jeecg/HmAntTable.vue";
import HmModal from "/@/components/built-in/layout/HmModal.vue";
import HmAntInput from "/@/components/built-in/jeecg/HmAntInput.vue";
import HmAntSelect from "/@/components/built-in/jeecg/HmAntSelect.vue";
import HmAntCascader from "/@/components/built-in/jeecg/HmAntCascader.vue";
import HmAntDatePicker from "/@/components/built-in/jeecg/HmAntDatePicker.vue";

export default {
	components: {
		HmBgCard,
		HmAntBgText,
		HmAntButton,
		HmAntTable,
		HmModal,
		HmAntInput,
		HmAntSelect,
		HmAntCascader,
		HmAntDatePicker,
	},
	data() {
		let self = this;
		return {
			userList: {
				columns: [
					{
						title: "用户名",
						dataIndex: "username",
						key: "username",
					},
					{
						title: "昵称",
						dataIndex: "realname",
						key: "realname",
					},
					{
						title: "状态",
						dataIndex: "status_dictText",
						key: "status_dictText",
						ellipsis: true,
					},
					{
						title: "操作",
						dataIndex: "",
						key: "action",
						width: 110,
						slots: {
							customRender: "action",
						},
					},
				],
				data: [
					{
						key: "1",
						number: "1",
						user: "Larry",
						name: "康艳",
						mailbox: "a.qhwbnoonm@dqdxq.mg",
						time: "1988-04-20 23:26:22",
						role: "William",
						remarks: "",
					},
					{
						key: "2",
						number: "2",
						user: "David",
						name: "朱勇",
						mailbox: "s.juhdhynhg@nlmkmy.tp",
						time: "1972-01-18 02:25:52",
						role: "Barbara",
						remarks: "",
					},
					{
						key: "3",
						number: "3",
						user: "Brenda",
						name: "常娜",
						mailbox: "o.suypr@pzgqzrsuyr.np",
						time: "1998-04-28 14:00:06",
						role: "Timothy",
						remarks: "",
					},
				],
				pagination: {
					current: 1,
					pageSize: 10,
					showSizeChanger: true,
					pageSizeOptions: ["10", "50", "80", "100"],
				},
				showColumnNo: true,
				url: "http://ckjd.dev.haomo-tech.com/api/sys/user/list",
				params: {},
				actions: [
					{
						name: "编辑",
						callback: function (item) {
							console.log("item", item);
							console.log(self);
							self.editModal.visible = true;
							self.editUsername.value = item.username;
							self.editRealname.value = item.realname;
							self.editSex_dictText.value = item.sex_dictText;
							self.editBirthday.value = item.birthday || null;
							self.editPhone.value = item.phone;
							self.editEmail.value = item.email;
							self.editStatus_dictText.value = item.status_dictText;
							self.editingModal = item;
						},
					},
					{
						name: "删除",
						callback: function (item) {
							console.log("item", item);
							self.deleteAccount.visible = true;
							self.deletingAccount = item;
						},
					},
				],
				combined: [],
			},
			editModal: {
				title: "编辑账号",
				visible: false,
				height: "430px",
			},
			editUsername: {
				value: null,
			},
			editRealname: {
				value: null,
			},
			editSex_dictText: {
				value: null,
				options: [
					{
						key: "男",
						value: "男",
					},
					{
						key: "女",
						value: "女",
					},
				],
			},
			editBirthday: {
				value: null,
			},
			editPhone: {
				value: null,
			},
			editEmail: {
				value: null,
			},
			editStatus_dictText: {
				value: null,
				options: [
					{
						key: "冻结",
						value: "冻结",
					},
					{
						key: "正常",
						value: "正常",
					},
				],
			},
			deleteAccount: {
				title: "删除账号",
				visible: false,
				width: "320px",
				height: "150px",
			},
			addUserModal: {
				title: "新增账号",
				height: "430px",
				visible: true,
			},
			newUsername: {
				value: "",
			},
			newRealname: {
				value: null,
			},
			newSex_dictText: {},
			newBirthday: {},
			newPhone: {},
			newEmail: {},
			newStatus_dictText: {},
			editRolename: {
				value: null,
			},
			editDepartment: {
				value: null,
			},
		};
	},
	methods: {
		onAddAccountNumberClick(item) {
			let self = this;
			self.addUserModal.visible = true;
		},
		onEditModalOk() {
			let self = this;
			this.editModal.visible = false;
			let url = "http://ckjd.dev.haomo-tech.com/api/sys/user/edit";
			let params = {};
			const { id } = self.editingModal;
			params = {
				username: self.newUsername.value,
				realname: self.newRealname.value,
				sex_dictText: self.newSex_dictText.value,
				birthday: self.newBirthday.value,
				phone: self.newPhone.value,
				email: self.newEmail.value,
				status_dictText: self.newStatus_dictText.value,
				id: id,
			};
			this.$putAction(url, params).then((res) => {
				console.log("编辑账号的结果", res);
				this.$refs.userList.getData();
			});
		},
		onEditModalCancel() {
			this.editModal.visible = false;
		},
		onAddUserModalOk() {
			let self = this;
			self.addUserModal.visible = false;
			let url = "http://ckjd.dev.haomo-tech.com/api/sys/user/add";
			let params = {};
			params = {
				username: self.newUsername.value,
				realname: self.newRealname.value,
				sex_dictText: self.newSex_dictText.value,
				phone: self.newPhone.value,
				email: self.newEmail.value,
				status_dictText: self.newStatus_dictText,
			};
			self.$postAction(url, params).then((res) => {
				console.log("新增用户的结果", res);
				this.$refs.userList.getData();
			});
		},
		onAddUserModalCancel() {
			this.addUserModal.visible = false;
		},
		onDeleteAccountOk() {
			let self = this;
			self.deleteAccount.visible = false;
			let url = "http://ckjd.dev.haomo-tech.com/api/sys/user/delete";
			const { id } = self.deletingAccount;
			let params = {
				id: id,
			};
			self.$deleteAction(url, params).then((res) => {
				console.log("删除结果", res);
				self.$refs.userList.getData();
			});
		},
		onDeleteAccountCancel() {
			let self = this;
			self.deleteAccount.visible = false;
		},
	},
};
</script>

<style scoped>
.page {
	background-color: rgb(238, 240, 242);
}

.ele-wrapper-backgroundTwo {
	width: 100%;
	height: 22px;
}

.ele-wrapper-backgroundThree {
	width: 100%;
}

.ele-wrapper-accountList {
	font-weight: 500;
	margin-left: 1%;
	margin-top: 10px;
}

.ele-wrapper-addAccountNumber {
	margin-left: 80%;
}

.ele-wrapper-userList {
	margin: 0 1%;
}

.ele-wrapper-backgroundFour {
	width: 100%;
}

.ele-wrapper-editUsername {
	width: 94%;
}

.ele-wrapper-editRealname {
	width: 91%;
	margin-top: 10px;
	text-align: left;
}

.ele-wrapper-editRolename {
	width: 91%;
	margin-top: 10px;
	text-align: left;
}

.ele-wrapper-editDepartment {
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-editSex_dictText {
	text-align: left;
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-editBirthday {
	text-align: left;
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-editPhone {
	text-align: left;
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-editEmail {
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-editStatus_dictText {
	text-align: left;
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-backgroundFive {
	width: 100%;
}

.ele-wrapper-newUsername {
	width: 94%;
}

.ele-wrapper-newRealname {
	width: 91%;
	margin-top: 10px;
}

.ele-wrapper-de0dca05-d480-443b-ade9-4e99fef4fd40 {
	margin-top: 20%;
	margin-left: 20%;
}
</style>
