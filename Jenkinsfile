pipeline {
  agent any
  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
        echo 'dependencies installed'
      }
    }
    stage('Build files') {
      steps {
        sh 'npm run generate'
      }
    }
    stage('Generate static .zip') {
      steps {
        dir(path: 'dist') {
          sh '''zip ../page-${BUILD_NUMBER}.zip -r * .[^.]*
'''
        }

      }
    }
  }
}