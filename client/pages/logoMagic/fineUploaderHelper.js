var $ = require('jquery');
import fineUploader from '../../../node_modules/fine-uploader/jquery.fine-uploader/jquery.fine-uploader.js';
import _ from 'underscore';

var FineUploaderHelper = {
  initialize: function(element){
    var masterId = this.generateUuid();
    element.fineUploader({
      template: 'qq-template-gallery',
      autoUpload: false,
      request: {
        endpoint: '/logoMagicAPI',
        params: {
          masterId: masterId
        }
      },
      thumbnails: {
        placeholders: {
          waitingPath: '/images/placeholders/waiting-generic.png',
          notAvailablePath: '/images/placeholders/not_available-generic.png'
        }
      },
      validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
      }
    });
    $('#trigger-upload').click(function() {
      element.fineUploader('uploadStoredFiles');
    });
  },
  generateUuid: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0; 
      var v = c === 'x' ? r : ( r & 0x3 | 0x8 );
      return v.toString(16);
    });
  }
};

module.exports = FineUploaderHelper;