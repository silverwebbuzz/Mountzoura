import { Injectable } from '@angular/core';
import { ToastController, LoadingController, ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin':'*',
     responseType: 'JSON'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  authenticationState = new BehaviorSubject(false);

  isLoading = false;
  isModalOpen = false;
  token: string;
  constructor(public toastCtrl: ToastController,
    public loadingController: LoadingController,
    private http: HttpClient,
    public modal: ModalController) {}

    async  showErrorToast(data: any) {
      const test = await this.toastCtrl.create({
        cssClass: 'err_pay',
        message: data,
        duration: 3000,
        position: 'top'
      });
      test.present();
    }

  async presentToastWithOptions(message?, cssClass?, position?) {
    const toast = await this.toastCtrl.create({
      message: message ? message : null,
      duration: 3000,
      position: position ? position : 'bottom',
      cssClass: cssClass ? cssClass : 'dark-trans login-toster',
      buttons: [
        {
          text: 'Εντάξει',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController.create({
      message: 'Παρακαλώ περιμένετε...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }

  async presentModal(PageName) {
    this.isModalOpen = true;
    return await this.modal.create({
      component: PageName,
    }).then(a => {
      a.present().then(() => {
        if (!this.isModalOpen) {
          a.dismiss();
        }
      })
    });
  }

  async dismissModal() {
    this.isModalOpen = false;
    return await this.modal.dismiss();
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
  // api call
  signin(body) {
    return this.http.post(environment.base_url + 'login', body)
  }
  
  teacher_signup(body) {
    return this.http.post(environment.base_url + 'TeacherRegistration', body)
  }

  parents_signup(body) {
    return this.http.post(environment.base_url + 'ParentRegistration', body)
  }

  arealist() {
    return this.http.get(environment.base_url + 'areaList')
  }

  sub_area(area_id){
    return this.http.get(environment.base_url + 'subAreaList' + "/" + area_id)
  }

  lessionlist() {
    let g_id = localStorage.getItem("grade_id")
    return this.http.get(environment.base_url + 'LessionByGrade' + "/" + g_id)
    // return this.http.get(environment.base_url + 'LessionByGrade/2')
  }

 teacher_lessionlist(g_id) {
    return this.http.get(environment.base_url + 'LessionByGrade' + "/" + g_id)
  }

  courselist(lessionId) {
    return this.http.get(environment.base_url + 'CourseByLession' + "/" + lessionId)
  }

  student_quiz_list(data) {
    return this.http.post<any>(environment.base_url + 'studentQuiz', data);
  }

  latest_quiz() {
    return this.http.get<any>(environment.base_url + 'latestQuiz');
  }

  get_quize_data(quizeId) {
    return this.http.get(environment.base_url + 'quizData' + "/" + quizeId)
  }

  quizQuestion(quizeId,data) {
    return this.http.post(environment.base_url + 'quizQuestion' + "/" + quizeId,data)
  }

  submitAnswer(data) {
    return this.http.post<any>(environment.base_url + 'submitAnswer', data);
  }

  realtedquiz(quizeId) {
    return this.http.get(environment.base_url + 'realtedQuiz' + "/" + quizeId)
  }
  
  Videolist() {
    return this.http.get<any>(environment.base_url + 'latestVideo');
  }

  studentVideo(data) {
    return this.http.post(environment.base_url + 'studentVideo',data)
  }

  realtedVideosQuiz(videoId) {
    return this.http.get(environment.base_url + 'realtedVideosQuiz' + "/" + videoId)
  }

  videoData(videoId,data) {
    return this.http.post(environment.base_url + 'videoData' + "/" + videoId,data)
  }
  
  studentSearchContent(data) {
    return this.http.post(environment.base_url + 'studentSearchContent',data)
  }

  recentContent() {
    return this.http.get(environment.base_url + 'recentContent' )
  }

  gradeList() {
    return this.http.get(environment.base_url + 'gradeList' )
  }

  Addkid(data) {
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'AddKid' + "/" + token,data)
  }

  KidList() {
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'KidList' + "/" + token)
  }

  KidData(kidId) {
    return this.http.get(environment.base_url + 'KidData' + "/" + kidId)
  }

  connectStudent(data) {
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'connectStudent' + "/" + token,data)
  }

  getStudentHomeWork(data){
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'getStudentHomeWork' + "/" + token,data)
  }

  countQuizPlay(data){
    return this.http.post(environment.base_url + 'countQuizPlay',data)
  }

  studentAnswer(data){
    return this.http.post(environment.base_url + 'studentAnswer',data)
  }

  studentAnswerShow(data){
    return this.http.post(environment.base_url + 'studentAnswerShow',data)
  }

  teacherSearchContent(data){
    return this.http.post(environment.base_url + 'teacherSearchContent',data)
  }

  countConnectStudent() {
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'countConnectStudent' + "/" + token)
  }

  connectStudentList(){
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'connectStudentList' + "/" + token)
  }

  homework(data){
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'homework' + "/" + token,data)
  }

  deleteHomework(Id){
    return this.http.get(environment.base_url + 'deleteHomework' + "/" + Id)
  }

  latestPdf(){
    return this.http.get(environment.base_url + 'latestPdf')
  }

  studentPdf(data){
    return this.http.post<any>(environment.base_url + 'studentPdf', data);
  }

  realtedPdfQuiz(videoId) {
    return this.http.get(environment.base_url + 'realtedPdfQuiz' + "/" + videoId)
  }

  pdfData(videoId,data) {
    return this.http.post(environment.base_url + 'pdfData' + "/" + videoId,data)
  }

  gradePrize(prizeid) {
    return this.http.get(environment.base_url + 'gradePrize' + "/" + prizeid)
  }

  terms_condition() {
    return this.http.get(environment.base_url + 'terms_condition')
  }

  privacy_policy() {
    return this.http.get(environment.base_url + 'privacy_policy')
  }

  gdpr() {
    return this.http.get(environment.base_url + 'gdpr')
  }

  getUserData() {
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'getUserData' + "/" + token)
  }

  updateUser(data) {
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'updateUser' + "/" + token,data) 
  }

  gradePurchase(data) {
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'gradePurchase' + "/" + token,data) 
  }

  cancelSubscription(kidid) {
    return this.http.get(environment.base_url + 'cancelSubscription' + "/" + kidid)
  }
  teacherPackagePurchase(data){
    var token = localStorage.getItem("token")
    return this.http.post(environment.base_url + 'teacherPackagePurchase' + "/" + token,data)
  }

  quizStartAdd() {
    var area_id = localStorage.getItem("area_id")
    return this.http.get(environment.base_url + 'quizStartAdd' + "/" + area_id)
  }

  quizEndAdd() {
    var area_id = localStorage.getItem("area_id")
    return this.http.get(environment.base_url + 'quizEndAdd' + "/" + area_id)
  }

  addParentAdvertisement() {
    var area_id = localStorage.getItem("area_id")
    return this.http.get(environment.base_url + 'addParentAdvertisement' + "/" + area_id)
  }

  addTeacherAdvertisement() {
    var area_id = localStorage.getItem("area_id")
    return this.http.get(environment.base_url + 'addTeacherAdvertisement' + "/" + area_id)
  }

  searchPageAdd() {
    var area_id = localStorage.getItem("area_id")
    return this.http.get(environment.base_url + 'searchPageAdd' + "/" + area_id)
  }
  KidHomework(){
    var kid_id = localStorage.getItem("kid_id")
    return this.http.get(environment.base_url + 'KidHomework' + "/" + kid_id)
  }

  forgot(data) {
    return this.http.post<any>(environment.base_url + 'forgetPassword', data);
  }
 
  parentRequestList(){
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'parentRequestList' + "/" + token)
  }

  teacherRequestList(){
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'teacherRequestList' + "/" + token)
  }

  kidConnectionStatus(id,data){
    return this.http.post(environment.base_url + 'kidConnectionStatus' + "/" + id,data)
  }
  
  contentSevenDays() {
    return this.http.get(environment.base_url + 'contentSevenDays')
  }

  teacherPackageStatus(){
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'teacherPackageStatus' + "/" + token)
  }

  parentPackageStatus(){
    var token = localStorage.getItem("token")
    return this.http.get(environment.base_url + 'parentPackageStatus' + "/" + token)
  }

  parentRequestDetail(id){
    return this.http.get(environment.base_url + 'parentRequestDetail' + "/" + id)
  }
}