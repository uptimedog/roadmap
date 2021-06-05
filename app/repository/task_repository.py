# Copyright 2021 Uptimedog
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

from app.models import Task


class TaskRepository():
    """
    Task Repository class

    It encapsulate the logic required to access stored tasks
    """

    PENDING = "pending"
    FAILED = "failed"
    SUCCEEDED = "succeeded"
    ERROR = "error"

    def insert_one(self, task):
        """Insert Task

        Args:
            task: a dict of task data.

        Returns:
            An instance of the created task
        """
        task = Task(
            uuid=task["uuid"],
            status=task["status"],
            payload=task["payload"],
            result=task["result"]
        )
        task.save()
        return task

    def get_one_by_id(self, id):
        """Get Task By ID

        Args:
            id: the task id.

        Returns:
            An instance of the task or False if it doesn't exist
        """
        try:
            task = Task.objects.get(pk=id)
            return False if task.pk is None else task
        except Exception:
            return False

    def get_one_by_uuid(self, uuid):
        """Get Task By uuid

        Args:
            uuid: the task uuid.

        Returns:
            An instance of the task or False if it doesn't exist
        """
        try:
            task = Task.objects.get(uuid=uuid)
            return False if task.pk is None else task
        except Exception:
            return False

    def get_many_by_status(self, status):
        """Get Many Tasks By Status

        Args:
            status: the task status.

        Returns:
            A list of tasks with the provided status
        """
        return Task.objects.filter(status=status)

    def update_one_by_id(self, id, new_data):
        """Update Task By ID

        Args:
            id: the task ID.
            new_data: a dict of task new data.

        Returns:
            A boolean representing the success of the operation
        """
        task = self.get_one_by_id(id)
        if task is not False:
            if "uuid" in new_data:
                task.uuid = new_data["uuid"]
            if "status" in new_data:
                task.status = new_data["status"]
            if "payload" in new_data:
                task.payload = new_data["payload"]
            if "result" in new_data:
                task.result = new_data["result"]

            task.save()
            return True
        return False

    def get_many_by_status_and_payload(self, status, payload):
        """Get Many Tasks By status and file key

        Args:
            status: the task status.
            payload: match a value on the payload

        Returns:
            A list of tasks with the provided status and file key
        """
        return Task.objects.filter(status=status, payload__contains=payload)
