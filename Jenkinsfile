def IMG_NAME = 'table_ball'
def CONTAINER_NAME = 'table_ball'

pipeline {
  agent any

  stages {
    stage('Clear old container') {
      steps {
        script {
          try {
            sh "docker rm -f ${CONTAINER_NAME}"
          } catch (exc) {
            echo "Not Found container:${CONTAINER_NAME} "
            echo "${exc}"
          }
        }
      }
    }
    stage('Build') {
      steps {
        sh "docker build -t ${IMG_NAME} -f Dockerfile ."
        sh "docker run -d \
            -p 7310:7310 \
            -v /usr/local/config_center/table_ball/config.prod.js:/code/config/config.prod.js \
            -v /usr/local/config_center/table_ball/config.json:/code/config/config.json \
            --name ${CONTAINER_NAME} \
            ${IMG_NAME}"
      }
    }
  }

  post {
    success {
      echo 'success'
    }
    failure {
      echo 'fail'
    }
  }
}
