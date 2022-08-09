import Api from './Api'

export default {
  getSpeechList () {
    return Api().get('getSpeechList')
  },
}
